import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Payment() {
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
            roomNo: '',
            roomType: 'AC',
            sharing: '2',
            amount: ''
        }
    });

    const roomType = watch('roomType');
    const sharing = watch('sharing');
    const [amount, setAmount] = useState(8000);

    useEffect(() => {
        const basePrices = {
            'AC': { '2': 8000, '3': 7000, '4': 6000 },
            'Non-AC': { '2': 6000, '3': 5000, '4': 4000 }
        };
        const calculatedAmount = basePrices[roomType][sharing];
        setAmount(calculatedAmount);
        setValue('amount', `₹ ${calculatedAmount}`);
    }, [roomType, sharing, setValue]);

    const onSubmit = (data) => {
        console.log('Payment Form Data:');
        console.log('Name:', data.name);
        console.log('Email:', data.email);
        console.log('Mobile:', data.mobile);
        console.log('Room No:', data.roomNo);
        console.log('Room Type:', data.roomType);
        console.log('Sharing:', data.sharing);
        console.log('Amount:', data.amount);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
            <h2>Hostel Payment Form</h2>
            <input {...register('name', { required: true })} placeholder="Name" style={styles.input} />
            <input {...register('email', { required: true })} placeholder="Email" style={styles.input} />
            <input {...register('mobile', { required: true })} placeholder="Mobile Number" style={styles.input} />
            <input {...register('roomNo', { required: true })} placeholder="Room Number" style={styles.input} />

            <select {...register('roomType')} style={styles.input}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
            </select>

            <select {...register('sharing')} style={styles.input}>
                <option value="2">2 Sharing</option>
                <option value="3">3 Sharing</option>
                <option value="4">4 Sharing</option>
            </select>

            <input {...register('amount')} value={`₹ ${amount}`} readOnly style={styles.input} />

            <button type="submit" style={styles.button}>Pay Now</button>
        </form>
    );
}

const styles = {
    form: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#198754',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%'
    }
};

export default Payment;
