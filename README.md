Instruction for setting up firebase hosting.

1. Create a github account
2. Create a firebase account
3. Go to a Firebase Console (https://console.firebase.google.com/) and create a new project
4. On a local instance go to a console and run <b>"npm install -g firebase-tools"</b>
5. Run <b>"firebase login"</b> to login into your account.
6. Run <b>"firebase init hosting"</b><br>
	a) choose "Use an existing project"<br>
	b) select the created project<br>
	c) "What do you want to use as your public directory" - skip, "public" by default<br>
	d) "Configure as a single-page app" - y<br>
	e) "Set up automatic build and deploys- with GitHub" - y<br>
	f) type existed repository using format "user/repository"<br>
	g) "Set up wotkflow to run a build script before every deploy" - y<br>
	h) "What script should be run before every deploy" - choose default - "npm ci && npm run build"<br>
	i) "Set up autpmatic deployment to your site's live channel when a PR is a merged" - y<br>
	j) "What is the name of the GitHub branch associated with your site's live channel" - choose default - "main"<br>

For handling multiple environments:
1. Go to a Firebase Console (https://console.firebase.google.com/) -> Hosting -> Add another site ![Screenshot 2024-07-23 131226](https://github.com/user-attachments/assets/b966efbe-a70f-4448-ab4e-1d76539bc0e7)
2. Add a website id, e.g. "staging-website"
3. Update firebase json by adding a new site for "staging-website" and corrected main website. "site" should be equal to your site ID in firebase. e.g.
```json
{
  "hosting": [{
    "site": "production",
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }, {
    "site": "staging-website",
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }]
}
```
