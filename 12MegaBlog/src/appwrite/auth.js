import conf from "../conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    async createAccount({email,password,name}) {
        try{
          const userAccount = await this.account.create(ID.unique(),email,password,name)
          if(userAccount) {
            return this.login({email,password})

          } else {
            return userAccount;
          }
        } catch(error) {
            throw error;
        }
    }

    async login({email, password}) {
        try{
             return await this.account.createEmailSession
             (email,password);

        }catch (error) {
            throw error;
        }
    }

    async getCureentUser(){
        try{
             return await this.account.get()

        } catch(error) {
            throw error
        }

        return null;
    }

    async logOut() {
        try{
            await this.account.deleteSession();

        }
        catch(error) {
          throw error
        }
    }
} 

const authServies = new AuthService();

export default AuthService;



