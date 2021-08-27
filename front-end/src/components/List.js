import React from "react";
import { Steps } from "antd";
import { IconComponent } from "../helpers/iconMap";
import { Row, Card } from "antd";

class List extends React.Component {
  render() {
    const { Step } = Steps;
    const details = [
      {
        id: "1",
        title: "Hello",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
      {
        id: "2",
        title: "Hola",
        description: "Hola bitch",
        supportingDocumentsLink: "https://yournamedoesntmatter",
        documentLink: "https://uaresmelly",
        status: "hello nine",
        comments: "u are not nice",
      },
    ];
    return (
      <div>
        {details.map((item) => {
          return (
            <Row style={{ justifyContent: "center" }}>
              <Card
                style={{ margin: "15px", width: "50em" }}
                title={item.title}
              >
                {item.description}
              </Card>
            </Row>
          );
        })}
      </div>
    );
  }
}
export default List;
