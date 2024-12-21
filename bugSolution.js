const db = getFirestore();

const docRef = doc(db, "cities", "BJ");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});