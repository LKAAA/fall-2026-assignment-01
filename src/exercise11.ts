import fs from 'fs/promises';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {

  let fileData: string = ""

  const timestamp = new Date().toISOString();
  const timestampedMessage = `${timestamp} ${statusMessage}\n`;

  try {
    await fs.appendFile(filePath, timestampedMessage, 'utf-8');
    console.log("Status message written successfully.");
  } catch (error) {
    console.error('Error writing file.', error);
    throw error;
  }
}
