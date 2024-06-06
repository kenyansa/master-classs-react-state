export default function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section className="contact-list w-64">
        <ul className="space-y-2 divide-y divide-gray-300">
          {contacts.map(contact =>
            <li key={contact.email}>
              <button
               className={`w-full text-left p-2 rounded ${contact.email === selectedContact.email ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => {
                onSelect(contact);
                }}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }
  