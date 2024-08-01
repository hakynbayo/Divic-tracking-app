export default interface ShipmentData {
  trackingNumber: string;
  lastUpdated: string;
  sender: string;
  consignee: string;
  originAddress: string;
  destinationAddress: string;
  shippingService: string;
  totalCODAmount: string;
  timeline: {
    time: string;
    date: string;
    event: string;
    description: string;
    person: string;
    image: string | null;
    icon: React.ElementType;
  }[];
}
