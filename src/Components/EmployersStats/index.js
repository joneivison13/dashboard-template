import React from "react";

import { Container } from "./styles";

function Employers() {
  return (
    <Container>
      <header className="column">
        Employees Stats
        <p>New employees on 15th September, 2016</p>
      </header>
      <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Joneivison1</td>
            <td>$36,738</td>
            <td>Nuger</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Joneivison2</td>
            <td>$36,738</td>
            <td>Nuger</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Joneivison3</td>
            <td>$36,738</td>
            <td>Nuger</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Joneivison4</td>
            <td>$36,738</td>
            <td>Nuger</td>
          </tr>
        </tbody>
      </table>
      </main>
    </Container>
  );
}

export default Employers;
