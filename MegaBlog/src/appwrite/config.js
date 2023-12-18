import conf from "../conf/conf";
import {Client ,ID,Databases,Storage,Query} from 'appwrite'
export class Service{
    client = new Client()
    databases;
    bucket;
   
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.Storage)
        }
        async createPost({title,slug,content,featuredImage,status,userId}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                )
            } catch (error) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
                
            }
        }
        async updatePost(slug,{title,content,featuredImage,status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    appwriteCollectionId,
                    slug,{
                        title,
                        content,
                        featuredImage,status
                    }
                )
                
            } catch (error) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
            }
        }
        async deletePost(slug,{title,content,featuredImage,status}){
            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true;
            } catch (error) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
                return false

            }
        }
        async getPost(slug){
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
            )
        }
        async getPosts(queries = [Query.equal("status", "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries,
                    
    
                )
            } catch (error) {
                console.log("Appwrite serive :: getPosts :: error", error);
                return false
            }
        }
        async uploadfile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketId,
                    ID.unique,
                    file
                )
                
            } catch (error) {
                console.log("Appwrite serive :: getPosts :: error", error);
                return false
            }
        }
        async deletefile(fileId){
            try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            } catch (error) {
                console.log("Appwrite serive :: getPosts :: error", error);
                return false
            }
        }
        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }
}
const service = new Service
export default service