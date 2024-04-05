export default async function handler(req: any, res: any) {
  try {
    const response = await fetch('https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json');
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
