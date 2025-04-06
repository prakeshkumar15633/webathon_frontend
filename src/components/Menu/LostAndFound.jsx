import React from 'react';

const lostItems = [
    {
        name: 'Black Wallet',
        foundDate: '2025-04-01',
        foundAt: 'Mess Hall',
        presentAt: 'Warden Office',
        image: 'https://thumbs.dreamstime.com/z/lost-leather-wallet-money-floor-lost-leather-wallet-money-floor-close-up-wallet-lying-concrete-118175967.jpg' // Add image URL
    },
    {
        name: 'Blue Water Bottle',
        foundDate: '2025-03-30',
        foundAt: 'Room 203',
        presentAt: 'Security Desk',
        image: 'https://tse1.mm.bing.net/th/id/OIP.lq0qwBZjNIXyho20qeCxJAHaHa?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Spectacles Case',
        foundDate: '2025-04-02',
        foundAt: 'Library',
        presentAt: 'Reception',
        image: 'https://just-glasses.co.uk/wp-content/uploads/2018/01/C81T7410-1024x1024.jpg'
    },
    {
        name: 'Red Hoodie',
        foundDate: '2025-03-28',
        foundAt: 'Gym',
        presentAt: 'Warden Office',
        image: 'https://i0.wp.com/cuttongarments.com/wp-content/uploads/2017/12/12red.png?fit=1000%2C1250&ssl=1'
    },
    {
        name: 'Pendrive 16GB',
        foundDate: '2025-04-03',
        foundAt: 'Lab Block',
        presentAt: 'IT Department',
        image: 'https://tse1.mm.bing.net/th/id/OIP.fVKGFjizTWO0_AT-NfpB1QHaHa?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Notebook (Maths)',
        foundDate: '2025-04-01',
        foundAt: 'Reading Room',
        presentAt: 'Lost & Found Desk',
        image: 'https://thumbs.dreamstime.com/z/school-notebook-mathematics-solution-examples-isolated-white-background-159337122.jpg'
    },
    {
        name: 'Wireless Earbuds',
        foundDate: '2025-03-27',
        foundAt: 'Bus Stand',
        presentAt: 'Security Cabin',
        image: 'https://tse4.mm.bing.net/th/id/OIP.RkIK4rqLiURR2R6znWlzmQHaDQ?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Calculator',
        foundDate: '2025-03-31',
        foundAt: 'Exam Hall',
        presentAt: 'Exam Control Room',
        image: 'https://pngimg.com/uploads/calculator/calculator_PNG7937.png'
    },
    {
        name: 'Black Cap',
        foundDate: '2025-04-04',
        foundAt: 'Playground',
        presentAt: 'Hostel Admin Office',
        image: 'https://i5.walmartimages.com/asr/3da601f1-af64-4ef7-b511-124fd4906d9c_1.0dd8c40bad3021161c351f255298e934.jpeg'
    },
    {
        name: 'Lab Coat',
        foundDate: '2025-03-29',
        foundAt: 'Bio Lab',
        presentAt: 'Lab Incharge Desk',
        image: 'https://th.bing.com/th/id/R.b8f99e2e765dc8c88ccccc47560f2240?rik=1iX4R14j4c%2bojA&riu=http%3a%2f%2fselectedme.com%2fwp-content%2fuploads%2f2016%2f03%2fLab-coat-Doctors-uniform-in-Dubai-UAE-for-chaper-price-white-color-with-pocket-and-logo-embroidery.jpg&ehk=bYfIUP0kskAPhsobXs9ZL35NFol%2f6c4%2fvZGjmX%2bztMA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        name: 'Charger',
        foundDate: '2025-04-01',
        foundAt: 'Canteen',
        presentAt: 'Reception',
        image: 'https://thumbs.dreamstime.com/b/phone-charger-table-black-background-73808157.jpg'
    },
    {
        name: 'Wrist Watch',
        foundDate: '2025-04-02',
        foundAt: 'Common Room',
        presentAt: 'Security Office',
        image: 'https://tse4.mm.bing.net/th/id/OIP.4sYeeReUem17XERSyfkHAwHaE7?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Pencil Box',
        foundDate: '2025-04-01',
        foundAt: 'Classroom B204',
        presentAt: 'Lost & Found Section',
        image: 'https://tse1.mm.bing.net/th/id/OIP.OoH2negDJh_3G_vcjnXLCgHaGK?rs=1&pid=ImgDetMain'
    },
    {
        name: 'ID Card',
        foundDate: '2025-04-03',
        foundAt: 'Corridor Near Library',
        presentAt: 'Main Office',
        image: 'https://img.freepik.com/premium-photo/id-tag-wooden-table_391052-3360.jpg'
    },
    {
        name: 'Sling Bag',
        foundDate: '2025-03-26',
        foundAt: 'Bike Parking',
        presentAt: 'Security Counter',
        image: 'https://indiacircus.com/pub/media/catalog/product/cache/1/image/e9c3970ab036de70892d86c6d221abfe/i/n/india-circus-waves-of-chevron-mobile-sling-bag-29194-2.jpg'
    }
];

function LostAndFound(){
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Lost and Found Items</h1>
            <div style={styles.grid}>
                {lostItems.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <img
                            src={item.image || 'https://via.placeholder.com/150'}
                            alt={item.name}
                            style={styles.image}
                        />
                        <h3>{item.name}</h3>
                        <p><strong>Date Found:</strong> {item.foundDate}</p>
                        <p><strong>Found At:</strong> {item.foundAt}</p>
                        <p><strong>Present At:</strong> {item.presentAt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2rem',
        color: '#343a40'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '15px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px'
    }
};

export default LostAndFound;
