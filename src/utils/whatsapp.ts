const WHATSAPP_NUMBER = '919953066750';

interface BookingData {
  name?: string;
  phone?: string;
  tripType?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  vehicle?: string;
  message?: string;
}

export function formatWhatsAppMessage(data: BookingData): string {
  const lines = ['*New Booking Request - Shree Ji Taxi Service*', ''];

  if (data.name) lines.push(`*Name:* ${data.name}`);
  if (data.phone) lines.push(`*Phone:* ${data.phone}`);
  if (data.tripType) lines.push(`*Trip Type:* ${data.tripType}`);
  if (data.pickup) lines.push(`*Pickup:* ${data.pickup}`);
  if (data.drop) lines.push(`*Drop:* ${data.drop}`);
  if (data.date) lines.push(`*Date:* ${data.date}`);
  if (data.time) lines.push(`*Time:* ${data.time}`);
  if (data.vehicle) lines.push(`*Vehicle:* ${data.vehicle}`);
  if (data.message) lines.push(`*Message:* ${data.message}`);

  return lines.join('\n');
}

export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

export function openWhatsAppWithBooking(data: BookingData): void {
  const message = formatWhatsAppMessage(data);
  openWhatsApp(message);
}

export function openWhatsAppChat(): void {
  const message = 'Hello! I would like to enquire about taxi services.';
  openWhatsApp(message);
}

export function openWhatsAppForDestination(destination: string): void {
  const message = `Hello! I would like to book a trip to *${destination}* from Delhi. Please share the details and rates.`;
  openWhatsApp(message);
}

export function openWhatsAppForVehicle(vehicle: string): void {
  const message = `Hello! I would like to book a *${vehicle}*. Please share availability and rates.`;
  openWhatsApp(message);
}

export function openWhatsAppForService(service: string): void {
  const message = `Hello! I would like to enquire about *${service}*. Please share the details.`;
  openWhatsApp(message);
}

export const PHONE_NUMBERS = {
  primary: '9953066750',
  secondary: '9205272745',
};

export function callPhone(number: string = PHONE_NUMBERS.primary): void {
  window.location.href = `tel:+91${number}`;
}
