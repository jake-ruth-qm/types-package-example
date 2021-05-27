import { Profile } from "../dist/models/Profile";

let profile = new Promise<Profile>((resolve, reject) => {
  //resolve(true);
});
profile.then(() => console.log());
