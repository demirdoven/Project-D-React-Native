import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.project.d",
    projectId: "66aeb3170025c453463b",
    databaseId: "66aeb4f400244269a4ea",
    userCollectionId: "66aeb51a003a502d9d18",
    videoCollectionId: "66aeb54b0031465ccea4",
    storageId: "66aeb82100310620a5aa",
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
  
// Sign In
export const signIn = async (email, password) => {
    try {

      await account.deleteSession("current");
      const session = await account.createEmailPasswordSession(email, password);
      return session;

    } catch (error) {
      throw new Error(error);
    }
}

export const getCurrentUser = async () => {

  try {
    
    const currentAccount = await account.get();

    if( ! currentAccount ) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if( ! currentUser ) throw Error;

    return currentUser.documents[0];

  } catch (error) {
    console.log(error)
  }

}
