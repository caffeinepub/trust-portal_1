# Trust Portal

## Current State
Admin Panel requires Internet Identity login to upload photos/videos. User is unable to access Admin Panel via custom domain (ERR_TUNNEL_CONNECTION_FAILED) and struggles with Internet Identity login process. Photo uploads via Caffeine chat are blocked due to file count limit.

## Requested Changes (Diff)

### Add
- A simple password-protected upload page at `/upload` that does not require Internet Identity
- Simple password input (hardcoded admin password) to protect the upload page
- Drag-and-drop or click-to-select file upload for photos directly to blob-storage gallery
- After upload, photos should appear in the Gallery section

### Modify
- Keep existing Admin Panel with Internet Identity for full management (delete, manage)
- Gallery page continues to show both static and backend-uploaded photos

### Remove
- Nothing removed

## Implementation Plan
1. Add a new `/upload` route in App.tsx
2. Create a new UploadPage component with simple password protection (password: "manavdeep2024")
3. On correct password, show file upload form using ExternalBlob to upload directly to blob-storage
4. Show upload progress and success message
5. Photos uploaded here appear in Gallery automatically via existing useGetAllPhotos hook
