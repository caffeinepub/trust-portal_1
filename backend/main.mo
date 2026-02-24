import List "mo:core/List";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";

import Blob "mo:core/Blob";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// Enable photo and video data storage through login persistence

actor {
  include MixinStorage();

  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  public type Photo = {
    id : Text;
    title : Text;
    image : Storage.ExternalBlob;
    uploadedAt : Time.Time;
  };

  public type Video = {
    id : Text;
    title : Text;
    videoUrl : Text;
    uploadedAt : Time.Time;
  };

  let contactMessages = List.empty<ContactMessage>();
  let photos = List.empty<Photo>();
  let videos = List.empty<Video>();

  let contactInfo = {
    address = "123 Internet Computer Ave, Blockchain City";
    phone = "+1234567890";
    email = "info@greenstripe.com";
  };

  module ContactMessage {
    public func compareByName(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Text.compare(msg1.name, msg2.name);
    };
  };

  module Photo {
    public func compareByUploadedAt(photo1 : Photo, photo2 : Photo) : Order.Order {
      Int.compare(photo2.uploadedAt, photo1.uploadedAt);
    };
  };

  module Video {
    public func compareByUploadedAt(video1 : Video, video2 : Video) : Order.Order {
      Int.compare(video2.uploadedAt, video1.uploadedAt);
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      email;
      subject;
      message;
    };
    contactMessages.add(newMessage);
  };

  public query ({ caller }) func getContactInfo() : async (Text, Text, Text) {
    (contactInfo.address, contactInfo.phone, contactInfo.email);
  };

  public query ({ caller }) func getAllMessagesSortedByName() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact messages");
    };
    contactMessages.toArray().sort(ContactMessage.compareByName);
  };

  public shared ({ caller }) func uploadPhoto(title : Text, image : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can upload photos");
    };
    let newPhoto : Photo = {
      id = Time.now().toText();
      title;
      image;
      uploadedAt = Time.now();
    };
    photos.add(newPhoto);
  };

  public query ({ caller }) func getAllPhotos() : async [Photo] {
    photos.toArray().sort(Photo.compareByUploadedAt);
  };

  public shared ({ caller }) func uploadVideo(title : Text, videoUrl : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can upload videos");
    };
    let newVideo : Video = {
      id = Time.now().toText();
      title;
      videoUrl;
      uploadedAt = Time.now();
    };
    videos.add(newVideo);
  };

  public query ({ caller }) func getAllVideos() : async [Video] {
    videos.toArray().sort(Video.compareByUploadedAt);
  };

  public shared ({ caller }) func deletePhoto(id : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete photos");
    };
    let originalSize = photos.size();
    let filteredPhotos = photos.filter(func(p) { p.id != id });
    if (filteredPhotos.size() < originalSize) { photos.clear(); photos.addAll(filteredPhotos.values()); true } else { false };
  };

  public shared ({ caller }) func deleteVideo(id : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete videos");
    };
    let originalSize = videos.size();
    let filteredVideos = videos.filter(func(v) { v.id != id });
    if (filteredVideos.size() < originalSize) { videos.clear(); videos.addAll(filteredVideos.values()); true } else { false };
  };
};

