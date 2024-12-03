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
        REGISTER: "/API/USERS/{userType}/CREATE",
        LOGIN: "/API/V1/AUTH/LOGIN",
        GET_ALL: "/API/USERS/GET",
        GET_BY_ID: "/API/USERS/GET/{ID}",
        UPDATE: "/API/{ID}",
        DELETE: "/API/{ID}"
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
            usernameOrEmail: "",
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
        LOGIN: (usernameOrEmail, password) => ({
            usernameOrEmail:usernameOrEmail,
            password:password
        }),

        REGISTER: (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) => ({
            advertiserFirstName:advertiserFirstName,
            advertiserLastName:advertiserLastName,
            advertiserUserName:advertiserUserName,
            advertiserPhoneNumber:advertiserPhoneNumber,
            advertiserEmailAddress:advertiserEmailAddress,
            advertiserStatus:advertiserStatus,
            advertiserPassword:advertiserPassword,
            advertiserConfirmPassword:advertiserConfirmPassword,
        }),
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}