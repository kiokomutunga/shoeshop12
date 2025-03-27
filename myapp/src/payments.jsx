import React, { useState } from 'react';

const PaymentWindow = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({});

    const paymentOptions = [
        { id: 'card', label: 'Credit/Debit Card' },
        { id: 'mpesa', label: 'M-Pesa' },
        { id: 'paypal', label: 'PayPal' },
        { id: 'bank', label: 'Bank Transfer' },
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const renderPaymentInterface = () => {
        switch (selectedOption) {
            case 'card':
                return (
                    <div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Name on Card</label>
                            <input
                                type="text"
                                name="cardName"
                                style={styles.inputBox}
                                value={formData.cardName || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                style={styles.inputBox}
                                value={formData.cardNumber || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                style={styles.inputBox}
                                value={formData.expiryDate || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                style={styles.inputBox}
                                value={formData.cvv || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                );
            case 'mpesa':
                return (
                    <div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Phone Number</label>
                            <input
                                type="text"
                                name="mpesaPhone"
                                style={styles.inputBox}
                                value={formData.mpesaPhone || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                );
            case 'paypal':
                return (
                    <div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>PayPal Email</label>
                            <input
                                type="email"
                                name="paypalEmail"
                                style={styles.inputBox}
                                value={formData.paypalEmail || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                );
            case 'bank':
                return (
                    <div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Account Name</label>
                            <input
                                type="text"
                                name="accountName"
                                style={styles.inputBox}
                                value={formData.accountName || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Account Number</label>
                            <input
                                type="text"
                                name="accountNumber"
                                style={styles.inputBox}
                                value={formData.accountNumber || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                );
            default:
                return <p style={styles.instructions}>Please select a payment method.</p>;
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.paymentContainer}>
                <h2 style={styles.title}>Shoe Shop Payment</h2>
                <p style={styles.total}>Total: $150.00</p>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Choose Payment Method</label>
                    <div style={styles.optionsContainer}>
                        {paymentOptions.map((option) => (
                            <button
                                key={option.id}
                                style={{
                                    ...styles.optionButton,
                                    backgroundColor: selectedOption === option.id ? '#0056b3' : '#007bff',
                                }}
                                onClick={() => setSelectedOption(option.id)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedOption && (
                    <div style={styles.popup}>
                        {renderPaymentInterface()}
                        <button style={styles.button}>Pay Now</button>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    paymentContainer: {
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    title: {
        margin: '0 0 20px',
        fontSize: '1.5rem',
        color: '#333',
        textAlign: 'center',
    },
    total: {
        fontSize: '1.2rem',
        marginBottom: '15px',
        textAlign: 'center',
        color: '#555',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    optionButton: {
        padding: '10px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
    inputBox: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '1rem',
        backgroundColor: '#f9f9f9',
    },
    button: {
        marginTop: '10px',
        padding: '10px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
    instructions: {
        textAlign: 'center',
        color: '#555',
        marginTop: '20px',
    },
    popup: {
        position: 'fixed',
        top: '50%',
        right: '10%',
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
};

export default PaymentWindow
