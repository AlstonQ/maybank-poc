export const maskPII = (value, type, isMaskingEnabled) => {
  if (!isMaskingEnabled || !value) return value;

  switch (type) {
    case 'nric':
      // Example: "880818-13-5883" -> "8808**-**-***3"
      if (typeof value === 'string' && value.length >= 12) {
        return value.substring(0, 4) + '**-**-***' + value.slice(-1);
      }
      return '****-**-****';
      
    case 'phone':
      // Example: "+60 12-388 9821" -> "+60 12-*** **21"
      if (typeof value === 'string') {
        const parts = value.split(' ');
        if (parts.length >= 2) {
          const country = parts[0];
          const rest = parts.slice(1).join(' ');
          if (rest.length > 4) {
             return `${country} ${rest.substring(0, 2)}*** **${rest.slice(-2)}`;
          }
        }
      }
      return '+60 **-*** ****';

    case 'email':
      // Example: "tengku.adnan@outlook.my" -> "te**********@outlook.my"
      if (typeof value === 'string' && value.includes('@')) {
        const [name, domain] = value.split('@');
        if (name.length > 2) {
          return `${name.substring(0, 2)}${'*'.repeat(name.length - 2)}@${domain}`;
        }
        return `*@${domain}`;
      }
      return '****@****.com';
      
    case 'account':
      // Example: "1122334455" -> "******4455"
      if (typeof value === 'string' && value.length > 4) {
        return '*'.repeat(value.length - 4) + value.slice(-4);
      }
      return '******';

    case 'cif':
      // Example: "CIF-4028911" -> "CIF-****911"
      if (typeof value === 'string' && value.length > 7) {
        return value.substring(0, 4) + '****' + value.slice(-3);
      }
      return 'CIF-******';

    default:
      return '****';
  }
};
