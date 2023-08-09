const axios = require('axios');

// Replace this URL with the URL where your server is running
const baseUrl = 'http://localhost:3000'; 

describe('API endpoints', () => {
  // Test the /register-domain endpoint
  it('should register a new domain', async () => {
    const response = await axios.post(`${baseUrl}/register-domain`, {
      to: '0xYourAddress',
      domain: 'example',
      tld: 'com',
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('transactionHash');
  });

  // Test the /domain-owner/:domain endpoint
  it('should get the owner of a domain', async () => {
    const domain = 'example.com';

    const response = await axios.get(`${baseUrl}/domain-owner/${domain}`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('owner');
  });

  // Test the /register-subdomain endpoint
  it('should register a subdomain', async () => {
    const response = await axios.post(`${baseUrl}/register-subdomain`, {
      to: '0xYourAddress',
      tokenId: 'tokenId', // Replace with an actual tokenId
      sub: 'subdomain',
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('transactionHash');
  });

  // Test the /burn-subdomain endpoint
  it('should burn a subdomain', async () => {
    const response = await axios.post(`${baseUrl}/burn-subdomain`, {
      tokenId: 'tokenId', // Replace with an actual tokenId
      sub: 'subdomain',
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('transactionHash');
  });
});
