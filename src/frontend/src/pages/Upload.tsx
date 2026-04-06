import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ImageIcon,
  Loader2,
  Lock,
  Upload as UploadIcon,
} from "lucide-react";
import { useState } from "react";
import { ExternalBlob } from "../backend";
import { useActor } from "../hooks/useActor";
import { usePhotoUpload } from "../hooks/useQueries";

const UPLOAD_PASSWORD = "manavdeep2024";

export default function Upload() {
  const { actor, isFetching } = useActor();

  // Password state
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Upload form state
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoUploadProgress, setPhotoUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const photoUpload = usePhotoUpload();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === UPLOAD_PASSWORD) {
      setIsUnlocked(true);
      setPasswordError("");
    } else {
      setPasswordError("गलत पासवर्ड है। फिर से कोशिश करें।");
      setPasswordInput("");
    }
  };

  const handlePhotoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile || !photoTitle.trim()) return;

    setUploadError("");
    setUploadSuccess(false);

    try {
      const arrayBuffer = await photoFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const externalBlob = ExternalBlob.fromBytes(
        uint8Array,
      ).withUploadProgress((percentage) => {
        setPhotoUploadProgress(percentage);
      });

      await photoUpload.mutateAsync({
        title: photoTitle,
        image: externalBlob,
      });

      setUploadSuccess(true);
      setPhotoFile(null);
      setPhotoTitle("");
      setPhotoUploadProgress(0);
      const fileInput = document.getElementById(
        "upload-photo-file",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setUploadError(
        error instanceof Error
          ? error.message
          : "अपलोड में समस्या आई। फिर से कोशिश करें।",
      );
      setPhotoUploadProgress(0);
    }
  };

  // Loading state while actor initializes
  if (isFetching || !actor) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
        <div
          className="flex flex-col items-center gap-4"
          data-ocid="upload.loading_state"
        >
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-muted-foreground">लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  // Password lock screen
  if (!isUnlocked) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-8">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl">फोटो अपलोड करें</CardTitle>
            <CardDescription>आगे बढ़ने के लिए पासवर्ड डालें</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upload-password">पासवर्ड</Label>
                <Input
                  id="upload-password"
                  data-ocid="upload.input"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="पासवर्ड यहाँ डालें"
                  autoFocus
                  required
                />
              </div>
              {passwordError && (
                <p
                  className="text-sm font-medium text-destructive"
                  data-ocid="upload.error_state"
                >
                  {passwordError}
                </p>
              )}
              <Button
                type="submit"
                data-ocid="upload.primary_button"
                className="w-full"
                size="lg"
              >
                <Lock className="mr-2 h-4 w-4" />
                प्रवेश करें
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Upload form (unlocked)
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <ImageIcon className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-xl">गैलरी में फोटो जोड़ें</CardTitle>
          <CardDescription>
            यहाँ अपलोड की गई फोटो Gallery में दिखेगी
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Success message */}
          {uploadSuccess && (
            <div
              className="mb-4 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300"
              data-ocid="upload.success_state"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <p className="font-medium">फोटो सफलतापूर्वक अपलोड हुई! 🎉</p>
            </div>
          )}

          <form onSubmit={handlePhotoUpload} className="space-y-5">
            {/* Title input */}
            <div className="space-y-2">
              <Label
                htmlFor="upload-photo-title"
                className="text-base font-medium"
              >
                फोटो का शीर्षक <span className="text-destructive">*</span>
              </Label>
              <Input
                id="upload-photo-title"
                data-ocid="upload.search_input"
                value={photoTitle}
                onChange={(e) => setPhotoTitle(e.target.value)}
                placeholder="जैसे: होली समारोह 2024"
                required
                className="h-11"
              />
            </div>

            {/* File input */}
            <div className="space-y-2">
              <Label
                htmlFor="upload-photo-file"
                className="text-base font-medium"
              >
                फोटो चुनें <span className="text-destructive">*</span>
              </Label>
              <Input
                id="upload-photo-file"
                data-ocid="upload.upload_button"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  setPhotoFile(e.target.files?.[0] || null);
                  setUploadSuccess(false);
                  setUploadError("");
                }}
                required
                className="h-11 cursor-pointer file:cursor-pointer file:rounded file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-sm file:font-medium file:text-primary"
              />
              <p className="text-xs text-muted-foreground">
                JPG, PNG या WebP फॉर्मेट
              </p>
            </div>

            {/* Progress bar */}
            {photoUpload.isPending && photoUploadProgress > 0 && (
              <div className="space-y-2" data-ocid="upload.loading_state">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>अपलोड हो रही है...</span>
                  <span>{photoUploadProgress}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${photoUploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Error message */}
            {uploadError && (
              <p
                className="text-sm font-medium text-destructive"
                data-ocid="upload.error_state"
              >
                ❌ {uploadError}
              </p>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              data-ocid="upload.submit_button"
              disabled={
                photoUpload.isPending || !photoFile || !photoTitle.trim()
              }
              className="w-full"
              size="lg"
            >
              {photoUpload.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  अपलोड हो रही है...
                </>
              ) : (
                <>
                  <UploadIcon className="mr-2 h-4 w-4" />
                  फोटो अपलोड करें
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
