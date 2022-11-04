import React from "react";
import Title from "../src/components/Title";
import { google } from "googleapis";

function Registry({ data }) {
  console.log(data);
  return (
    <div>
      <Title text="Registry" />
      <p>
        We have compiled a list of items that would be helpful as we start off
        our lives together. We have included links to show what type we are
        looking for, but does not need to be that specific item or brand! If you
        chose to purchase something from this list, please
        `&quot;``check`&quot;`` the box.
      </p>
      <p>We hope this can be a useful resource to you! </p>
      <p>Thank you!</p>
    </div>
  );
}

export default Registry;

async function getAuthToken() {
  const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY);

  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });

  const authToken = await auth.getClient();
  return authToken;
}

export async function getServerSideProps() {
  const auth = await getAuthToken();

  const sheets = google.sheets({ version: "v4", auth });
  const range = `Sheet1!2:200`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const result = response.data.values.map((product, index) => {
    return {
      row: index + 2,
      name: product[0],
      description: product[1] ?? null,
      type: product[2] ?? null,
      amazonLink: product[3] ?? null,
      amazonLink2: product[4] ?? null,
      targetLink: product[5] ?? null,
      targetLink2: product[6] ?? null,
      otherLink: product[7] ?? null,
      otherLink2: product[8] ?? null,
      whoBought: product[9] ?? null,
      checked: product[10] ?? null,
      images: product[11] ?? null,
    };
  });

  return {
    props: {
      data: result,
    },
  };
}
