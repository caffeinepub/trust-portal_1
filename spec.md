# Trust Portal

## Current State
The Manavdeep Seva Trust website is fully built with Home, About, Programs, Gallery, Donations, Contact, Awards & Recognition, and Admin Panel pages. The Admin Panel uses Internet Identity login to allow uploading/deleting photos and videos via blob-storage. The custom domain (manavdeepsevatrust.org) is having connectivity issues (ERR_TUNNEL_CONNECTION_FAILED), preventing admin access.

## Requested Changes (Diff)

### Add
- On the Admin login page, show a helpful message explaining that if the custom domain doesn't work, user can use the direct ICP link
- Show the user their current page URL so they can navigate directly
- Add a visible note on Admin page about alternative access if custom domain fails

### Modify
- Admin page login section: add a helper text below the login button showing instructions in Hindi for accessing admin panel if custom domain is not working
- Ensure the login button works correctly with Internet Identity

### Remove
- Nothing to remove

## Implementation Plan
1. Update Admin.tsx to add a helpful Hindi message below the login button about accessing admin panel via direct link
2. Add a note that if custom domain fails, they should use the Caffeine preview link with /admin appended
3. Keep all existing functionality intact
