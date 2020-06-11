import axios from 'axios';

export default axios.create({
			baseURL: 'https://api.unsplash.com',
			headers: {
				Authorization: 'Client-ID SUQ1D_-3F_Zb6n8qyd3ujpAI5T4BHZCynGtla6v8SU8'
			}
});

