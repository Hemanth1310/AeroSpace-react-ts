import type { data, dataEntries, destination, status } from "../types";

/**
 * Generates an array of mock data objects for a Galactic Fleet Status Dashboard.
 * @param {number} count The number of mock records to generate.
 * @returns {Array<Object>} An array of probe objects.
 */
export function generateProbeData(count: number) {
    const destinations:destination[] = ['Mars', 'Jupiter', 'Saturn', 'Neptune', 'Pluto', 'Deep Space'];
    const statuses:status[] = ['Operational', 'Idle', 'Maintenance', 'Error'];
    const data:data = [];

    for (let i = 1; i <= count; i++) {
        const destination = destinations[Math.floor(Math.random() * destinations.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        // Create a random launch date within the last 10 years
        const launchYear = 2015 + Math.floor(Math.random() * 11);
        const launchMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const launchDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        const launchDate = `${launchYear}-${launchMonth}-${launchDay}`;

        data.push({
            id: i,
            name: `Probe_${destination.substring(0, 3)}_${1000 + i}`,
            destination: destination as destination,
            status: status as status,
            distance_ly: parseFloat((Math.random() * 10).toFixed(3)), // 0 to 10 light-years
            launch_date: launchDate,
        }as dataEntries);
    }
    return data;
}

// Example usage: const fleetData = generateProbeData(2000);