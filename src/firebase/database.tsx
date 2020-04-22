import {database} from "./firebaseService";
import shortid from "shortid";


export function createUserFireBase(userId: string) {
        return database.ref('userBlogs')
        .child(userId)  //userID
        .set({pageBlog: ''})
}

export function updateBlogDataFireBase(nameBlog: string, nameColumn: string, value: any) {
        return database.ref('listBlog')
            .child(nameBlog)
            .child('dataBlock')
            .update({[nameColumn]: value})
}
export function updateArrayBlogDataFireBase(nameBlog: string, nameColumn: string, value: any, uuid: string) {
        return database.ref('listBlog')
            .child(nameBlog)
            .child('dataBlock')
            .child(nameColumn)
            .child(uuid)
            .update(value)
}

export function addRowBlogDataFireBase(nameBlog: string, nameColumn: string, value: any) {
        return database.ref('listBlog')
            .child(nameBlog)
            .child('dataBlock')
            .child(nameColumn)
            .set(value)
}

export function addArrayBlogDataFireBase(nameBlog: string, nameColumn: string, value: any) {
        return database.ref('listBlog')
            .child(nameBlog)
            .child('dataBlock')
            .child(nameColumn)
            .child(value.uuid)
            .set(value)
}

export function removeArrayBlogDataFireBase(nameBlog: string, nameColumn: string, uuid: string) {
        return database.ref('listBlog')
            .child(nameBlog)
            .child('dataBlock')
            .child(nameColumn)
            .child(uuid)
            .remove()
}

export function createPageBlogFireBase(pageBlog: string) {
        return database.ref('listBlog')
            .child(pageBlog)
            .child('dataBlock')
            .set({
                Avatar: { image: ''},
                Tasks: '',
                About: '',
                Description: { name: pageBlog},
                Tiers: '',
                Background: '',
                Posts: '',
        })
}

export function updatePageBlogUserBlogFireBase(userId: string, pageBlog: any) {
        return database.ref('userBlogs')
            .child(userId)
            .update({pageBlog})
}

export function addSubscriptionsUserBlogFireBase(userId: string, subscriptions: any) {
        return database.ref('userBlogs')
            .child(userId)
            .child('subscriptions')
            .child(shortid.generate())
            .set(subscriptions)
}

export function getPageBlogUserFireBase(userId: string) {
        return database.ref('userBlogs')
            .child(userId)
            .once('value')
}

export function getDataPageBlogFireBase(name: string) {
        return database.ref('listBlog')
            .child(name)
            .child('dataBlock')
            .once('value')
}