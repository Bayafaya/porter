import React from 'react';

const OtherContacts: React.FC = () => {
    const contacts = [
        {
            text: '0708 792 569',
            link: 'tel:+996708792569',
        },
        {
            text: '0555 792 569',
            link: 'tel:+996555792569',
        },
        {
            text: '0777 792 569',
            link: 'tel:+996777792569',
        },
    ];
    return (
        <ul>
        { contacts.map((contact) => (
            <li key={contact.text} className='list-disc text-primary mb-4'>
                <a className='text-lg' href={contact.link}>
                  <span className='font-bold'>{contact.text}</span>  
                </a>
            </li>
        ))
        }
        </ul>
    );
};

export default OtherContacts;