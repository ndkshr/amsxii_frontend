// http://ec2-3-141-169-170.us-east-2.compute.amazonaws.com:8000/auth_urls/flight-schedule-list

export const SCHEME = "http://";
export const DOMAIN = "ec2-3-141-169-170.us-east-2.compute.amazonaws.com";
export const PORT = ":8000";
export const API_PATH = "/auth_urls"

// AMS_API Domain URL
export const AMS_API = SCHEME + DOMAIN + PORT + API_PATH;

// API Endpoint URLs path suffix
export const FLIGHT_SCHEDULE_LIST_API = AMS_API + "/flight-schedule-list";


