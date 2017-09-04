module.exports = {
    settings: {
        setup: function () {
            if (!("wenvr" in localStorage))
                localStorage.wenvr = {
                    version: "1.0.0",
                    profiles: {},
                    index: 0,
                    defaultProfile: false
                };
            return localStorage.wenvr;
        },
        get: function (profile) {
            if (!("profile" in Wenvr.data.profiles))
                return false;
            return Wenvr.data.profiles[profile];
        },
        create: function (profile) {
            Wenvr.data.index++;
            Wenvr.data.profiles[profile] = {name: profile, id: Wenvr.data.index, settings: {}};
        }
    }
};