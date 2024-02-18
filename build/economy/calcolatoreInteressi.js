
        function calculateInterest(type) {
          const principalAmount =
            parseFloat(document.getElementById("principal").value) || 0;
          const annualInterestRate =
            parseFloat(document.getElementById("rate").value) || 0;
          const investmentTime =
            parseFloat(document.getElementById("time").value) || 0;

          const startDate = new Date(
            document.getElementById("startDate").value
          );
          const endDate = new Date(document.getElementById("endDate").value);

          if (type === "compound") {
            if (!startDate || !endDate || startDate >= endDate) {
              alert(
                "Intervallo di date non valido. La data di fine deve essere successiva alla data di inizio."
              );
              return;
            }

            const daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);

            const compoundInterest =
              principalAmount *
                Math.pow(1 + annualInterestRate / 100, investmentTime) -
              principalAmount;

            displayResult(
              principalAmount,
              annualInterestRate,
              investmentTime,
              startDate.toDateString(),
              endDate.toDateString(),
              compoundInterest
            );
          } else if (type === "simple") {
            const simpleInterest =
              (principalAmount * annualInterestRate * investmentTime) / 100;
            displayResult(
              principalAmount,
              annualInterestRate,
              investmentTime,
              "",
              "",
              simpleInterest
            );
          }
        }

        function displayResult(
          principal,
          rate,
          time,
          startDate,
          endDate,
          interest
        ) {
          const resultContainer = document.getElementById("result-container");
          resultContainer.innerHTML = `
          <p>Importo Principale: €${principal.toFixed(2)}</p>
          <p>Tasso di Interesse Annuo: ${rate}%</p>
          <p>Periodo di Investimento: ${time} anni</p>
          ${startDate ? `<p>Data di Inizio: ${startDate}</p>` : ""}
          ${endDate ? `<p>Data di Fine: ${endDate}</p>` : ""}
          <p>Interessi: €${interest.toFixed(2)}</p>
        `;
        }

        function switchToCompoundInterest() {
          document.getElementById("startDate").disabled = false;
          document.getElementById("endDate").disabled = false;
          document.querySelector(
            "button:nth-of-type(1)"
          ).style.backgroundColor = "#007bff";
          document.querySelector(
            "button:nth-of-type(2)"
          ).style.backgroundColor = "";
        }

        function switchToSimpleInterest() {
          document.getElementById("startDate").disabled = true;
          document.getElementById("endDate").disabled = true;
          document.querySelector(
            "button:nth-of-type(2)"
          ).style.backgroundColor = "#007bff";
          document.querySelector(
            "button:nth-of-type(1)"
          ).style.backgroundColor = "";
        }
    