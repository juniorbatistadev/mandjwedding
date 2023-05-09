import React from "react";
import Title from "../src/components/Title";
import { google } from "googleapis";
import styles from "../styles/registry.module.css";
import MySwal from "../src/components/Swal";
import Swal from "sweetalert2";

function Item({ item }) {
  const { row, checked } = item;
  const handleClick = async () => {
    const { value: formValues } = await MySwal.fire({
      title: <p>Mark &quot;`{name}&quot;` as bought.</p>,
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Your name" type="text">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Your email" type="email">',
      focusConfirm: false,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Save As Checked",
      confirmButtonColor: "#571F31",
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      //validate data
      if (!formValues[0] || !/\S+@\S+\.\S+/.test(formValues[1])) {
        Swal.fire({
          icon: "error",
          html: "Please enter a valid email and name",
        });

        return;
      }

      await fetch(
        `/api/hello?name=${formValues[0]}&email=${formValues[1]}&row=${row}`
      ).then(() =>
        Swal.fire({
          icon: "success",
          html: "Checked",
        })
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#f3f3f3",
        padding: 20,
        borderRadius: 10,
      }}
    >
      {item.images ? (
        <img
          style={{
            borderRadius: 10,
            width: "100%",
            height: 120,
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={Array.isArray(item.images) ? item.images[0] : item.images}
        />
      ) : null}

      {item.name !== "Gift Cards" && (
        <button
          style={{
            marginTop: 20,
            padding: 10,
            borderRadius: 10,
            border: "none",
            background: checked ? "#ddd" : "#505a46",
            color: checked ? "#444" : "#fff",
            fontSize: 17,
            cursor: checked ? "auto" : "pointer",
          }}
          disabled={checked}
          onClick={handleClick}
        >
          {checked ? "Bought" : "Mark as Bought"}
        </button>
      )}

      <div style={{ marginTop: 20 }}>
        {item.amazonLink && (
          <a target="_blank" rel="noreferrer" href={item.amazonLink}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
              style={{ width: 27 }}
            />
          </a>
        )}
        {item.amazonLink2 && (
          <a target="_blank" rel="noreferrer" href={item.amazonLink}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
              style={{ width: 27 }}
            />
          </a>
        )}
        {item.targetLink && (
          <a target="_blank" rel="noreferrer" href={item.targetLink}>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png"
              style={{ width: 27 }}
            />
          </a>
        )}
        {item.targetLink2 && (
          <a target="_blank" rel="noreferrer" href={item.targetLink2}>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png"
              style={{ width: 27 }}
            />
          </a>
        )}
        {item.otherLink && (
          <a target="_blank" rel="noreferrer" href={item.otherLink}>
            {" "}
            <img
              src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png"
              style={{ width: 27 }}
            />
          </a>
        )}
        {item.otherLink2 && (
          <a href={item.otherLink2}>
            <img
              src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png"
              style={{ width: 27 }}
            />
          </a>
        )}
      </div>

      <h2
        style={{
          marginTop: 10,
          wordBreak: "break-word",
          color: checked ? "#999" : "#000",
          textDecoration: checked ? "line-through" : "none",
        }}
      >
        {item.name}
      </h2>
      <p>{item.description}</p>
    </div>
  );
}

function Registry({ data }) {
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Registry" />
      <p style={{ fontSize: 22, textAlign: "center", marginTop: 10 }}>
        We have compiled a list of items that would be helpful as we start off
        our lives together. We have included links to show what type we are
        looking for, but does not need to be that specific item or brand! If you
        chose to purchase something from this list, please &quot;check&quot; the
        box.
      </p>
      <p style={{ fontSize: 22 }}>
        We hope this can be a useful resource to you!{" "}
      </p>
      <p style={{ fontSize: 22 }}>Thank you!</p>
      <p style={{ fontSize: 22, marginTop: 20, fontWeight: "bold" }}>
        You may ship to: 987 Smith Ave. Harrisonburg VA 22802
      </p>

      <div
        className={styles.container}
        style={{
          display: "grid",
          marginTop: 60,
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gridGap: 20,
          width: "100%",
        }}
      >
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
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
