Rogowski Grzegorz 

Łańcuch CI został wzbogacony o następujące etapy:

Przeprowadzenie testu CVE.
Logowanie do GHCR.
Zdefiniowanie metadanych potrzebnych do przesłania obrazu do repozytorium.
Zbudowanie i przesłanie obrazu do repozytorium.

Sprawdzanie podatności na zagrożenia odbywa się w kroku o id d_scout

Opcja only-severities określa, jakie poziomy zagrożeń mają być sprawdzane, podczas gdy exit-code powoduje zatrzymanie workflow. Jeśli zostaną wykryte jakiejkolwiek podatności na zdefiniowanych poziomach zagrożeń, krok kończy się niepowodzeniem, a następne etapy nie są uruchamiane.