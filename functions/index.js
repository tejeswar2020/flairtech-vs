const functions = require('firebase-functions');
const admin=require("firebase-admin")
admin.initializeApp();

exports.addManagerRole=functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid,{
            manager:true
        })
    }).then(()=>{
        return {
            message:`Success! ${data.email} has been made as manager`
        }
    }).catch(err=>{
        return err;
    })
})

exports.addAdminRole=functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin:true
        })
    }).then(()=>{
        return {
            message:`Success! ${data.email} has been made as admin`
        }
    }).catch(err=>{
        return err;
    })
})

exports.addUserRole=functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid,{
            user:true
        })
    }).then(()=>{
        return {
            message:`Success! ${data.email} has been made as user`
        }
    }).catch(err=>{
        return err;
    })
})

