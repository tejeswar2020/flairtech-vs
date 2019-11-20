const functions = require('firebase-functions');
const admin=require("firebase-admin")
admin.initializeApp();
exports.addAdminRole=functions.https.onCall((data,context)=>{

    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid, {
            admin:true
        })
    }).then(()=>{
        return{
            message:`Success! ${data.email} is admin now`
        }
    }).catch(err=>{
        return err;
    })
})

exports.addManagerRole=functions.https.onCall((data,context)=>{

    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid, {
            manager:true
        })
    }).then(()=>{
        return{
            message:`Success! ${data.email} is manager now`
        }
    }).catch(err=>{
        return err;
    })
})


exports.personalInformation=functions.https.onCall()

