import http from "./httpService";

import config from "./config.json";


export const registerUser = user => {
    return http.post(
        `${config.toplearnapi}/usersList.json`,
        JSON.stringify(user)
    );
};
