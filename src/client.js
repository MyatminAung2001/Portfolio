import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '6xrg0ds5',
    dataset: 'production',
    apiVersion: '2022-03-11',
    useCdn: true,
    token: 'skZB1Eci3Ym2L9J9Atybt5FT6kF51vHMTS7f4QxNODClVyFDpmZOV8t9uKhiywVUNrL95V2dphZZYIJ119K9E98FCRa1QLAC8xly5KJJKq19AF6IB5fTReMBWBEVRTIEC9x1BydqPdoJKerhhP2ce8peIRnpB77awrW3CTJNWGiQGhHIFZ28',
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);