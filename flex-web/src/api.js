const API_BASE = "http://127.0.0.1:8000/api";

export const backend = {
    fetch_all_profiles: async () => (await fetch(`${API_BASE}/profiles`)).json(),
    request_profile_login: async (id) => (await fetch(`${API_BASE}/profile/${id}/auth`)).json(),
    confirm_authenticated_login: async (id) => {
        const res = await fetch(`${API_BASE}/profile/login`, {
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_id: id})
        });
        return await res.json();
    },
    fetch_current_profile: async () => (await fetch(`${API_BASE}/profile/current`)).json(),
    load_active_routine: async () => (await fetch(`${API_BASE}/routine`)).json(),
    commit_routine: async (jsonStr) => {
        const res = await fetch(`${API_BASE}/routine`, {
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ proposed_json_str: jsonStr })
        });
        return await res.json();
    },
    wipe_active_routine: async () => {
        const res = await fetch(`${API_BASE}/routine`, { method: "DELETE" });
        return await res.json();
    },
    wipe_active_routine: async () => {
        const res = await fetch(`${API_BASE}/routine`, { method: "DELETE" });
        return await res.json();
    },
    process_query: async (text, signal) => {
        const res = await fetch(`${API_BASE}/chat`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_input: text}),
            signal: signal // Allow React to kill the fetch request
        });
        return await res.json();
    },
    upload_workout_log: async (file) => {
        let formData = new FormData();
        formData.append("file", file);
        const res = await fetch(`${API_BASE}/upload`, { method: "POST", body: formData });
        return await res.json();
    },
    register_profile: async (id, name, style, user, pass, avatar) => {
        await fetch(`${API_BASE}/profile/register`, {
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: id, name: name, training_style: style, 
                username: user, password: pass, avatar_color: avatar
            })
        });
    },
    calibrate_profile: async (level) => {
        const res = await fetch(`${API_BASE}/profile/calibrate`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ experience_level: level })
        });
        return await res.json();
    },
    edit_active_profile: async (name, style, experience, avatar) => {
        const res = await fetch(`${API_BASE}/profile/edit`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 
                name: name, 
                training_style: style, 
                experience_level: experience, 
                avatar_color: avatar 
            })
        });
        return await res.json();
    },
    // Account Deletion Bridge
    delete_athlete_profile: async (id) => {
        const res = await fetch(`${API_BASE}/profile/${id}`, { method: "DELETE" });
        return await res.json();
    }
};