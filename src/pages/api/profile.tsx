import { supabase } from "@/shared/db";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, image } = req.body;
    const { data, error } = await supabase.from('profiles').upsert({
      email, username: name, image_url: image
    }, {
      onConflict: 'email'
    });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }
}
