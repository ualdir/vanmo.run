const firebaseConfig = {
  apiKey: "AIzaSyCG0HlkCfBmmv7hTEnJEHLnXRzCXjsYu2w",
  authDomain: "vanmo-run.firebaseapp.com",
  projectId: "vanmo-run",
};

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
appCheck.activate('6LcMQ_csAAAAAO7Ut6RcmEmoX4Q4XVs6siO72LNv', true);

const auth = firebase.auth();
const db = firebase.firestore();

async function ensureAnonymousUser() {
  if (auth.currentUser) return auth.currentUser;
  const credential = await auth.signInAnonymously();
  return credential.user;
}

window.createVolunteer = async (variables) => {
  try {
    await ensureAnonymousUser();
    const doc = {
      name: variables.name,
      email: variables.email,
      phone: variables.phone,
      city: variables.city,
      state: variables.state || "",
      country: variables.country || "",
      ddi: variables.ddi || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return db.collection("Volunteer").add(doc);
  } catch (err) {
    const code = err?.code ? `${err.code}: ` : "";
    throw new Error(`${code}${err?.message || window.t?.("formMessages.saveError") || "Error saving registration"}`);
  }
};

window.createOrganizer = async (variables) => {
  try {
    await ensureAnonymousUser();
    const doc = {
      company: variables.company,
      responsible: variables.responsible,
      email: variables.email,
      phone: variables.phone,
      website: variables.website || "",
      instagram: variables.instagram || "",
      city: variables.city,
      state: variables.state || "",
      country: variables.country || "",
      ddi: variables.ddi || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return db.collection("Organizer").add(doc);
  } catch (err) {
    const code = err?.code ? `${err.code}: ` : "";
    throw new Error(`${code}${err?.message || window.t?.("formMessages.saveError") || "Error saving registration"}`);
  }
};
