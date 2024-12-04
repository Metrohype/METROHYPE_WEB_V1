export const API_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export const API_ROUTES = {
    ADMIN: {

    },
    ADVERTISER: {
        CREATE: "/API/USERS/:userType/CREATE",
        LOGIN: "/API/v1/AUTH/LOGIN",
        GET_ALL: "/API/ADVERTISERS/GETALL",
        GET_BY_ID: "/API/ADVERTISERS/GETBYID/{ID}",
        UPDATE: "/API/ADVERTISERS/UPDATE/{ID}",
        DELETE: "/API/ADVERTISERS/DELETE/{ID}"
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}


export const API_PAYLOAD = {
    ADMIN: {

    },
    ADVERTISER: {
        LOGIN: {
            email: "",
            password: ""
        }
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}


export const API_PAYLOAD_FACTORY = {
    ADMIN: {

    },
    ADVERTISER: {
        LOGIN: (email, password) => ({
            usernameOrEmail:email,
            password:password
        }),

        REGISTER: (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) => ({
            firstName:advertiserFirstName,
            lastName:advertiserLastName,
            username:advertiserUserName,
            phoneNumber:advertiserPhoneNumber,
            email:advertiserEmailAddress,
            password:advertiserPassword,
            confirmPassword:advertiserConfirmPassword,
        }),
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}