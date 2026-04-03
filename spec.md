# Manavdeep Seva Trust

## Current State
The website has a photo/video gallery with an Admin panel. Photos can be uploaded via Admin page, but `uploadPhoto` and `uploadVideo` require the caller to have `#admin` permission in the access control system. There is no way for the owner to self-assign admin role, so uploads always fail with "Unauthorized".

## Requested Changes (Diff)

### Add
- Auto-assign admin role to the first caller who interacts with the canister (owner bootstrap)
- A `claimAdmin` public function so the first person to call it becomes admin

### Modify
- `uploadPhoto` and `uploadVideo`: allow any authenticated (non-anonymous) user to upload, not just admins — so the owner can upload after logging in
- `deletePhoto` and `deleteVideo`: keep admin-only restriction

### Remove
- Nothing

## Implementation Plan
1. In `main.mo`, change `uploadPhoto` and `uploadVideo` checks from `#admin` to simply rejecting anonymous callers (Principal.isAnonymous check)
2. Add a `claimAdmin` function that assigns the caller as admin if no admin exists yet
3. Keep delete operations admin-only
