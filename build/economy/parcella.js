      document.getElementById("btn").addEventListener("click", calcola);

      function calcola() {
        let onorario = document.getElementById("onorario").value;
        let costi_documentati =
          document.getElementById("costi_documentati").value;
        let ris = +onorario + +costi_documentati;
        document.getElementById("imponibile").value = ris;
        let ris_iva = (+onorario * 22) / 100;
        document.getElementById("iva_22").value = ris_iva;
        let ris_tot = +ris + +ris_iva;
        document.getElementById("tot_parcella").value = ris_tot;
        let ris_rit = (+onorario * 20) / 100;
        document.getElementById("ritenuta_d'acconto").value = ris_rit;
        let ris_netto = +ris_tot - +ris_rit;
        document.getElementById("netto_da_pagare").value = ris_netto;
      }