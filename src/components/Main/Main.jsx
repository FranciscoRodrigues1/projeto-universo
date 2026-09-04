function Main() {
  return (
    <main id="inicio">
      <section aria-labelledby="titulo-principal">
        <h2 id="titulo-principal">Descobrindo o universo</h2>

        <p>
          Nesta página você encontrará curiosidades sobre o universo,
          planetas e alguns dos fenômenos que tornam o espaço tão fascinante.
        </p>
      </section>

      <section id="planetas" aria-labelledby="titulo-planetas">
        <h2 id="titulo-planetas">Conheça o espaço</h2>

        <article>
          <h3>Planetas</h3>
          <p>
            Existem muitos planetas no universo, cada um com características
            únicas.
          </p>
        </article>

        <article>
          <h3>Estrelas</h3>
          <p>
            As estrelas são enormes corpos celestes que produzem luz e calor.
          </p>
        </article>

        <article id="curiosidades">
          <h3>Curiosidades</h3>
          <p>
            O universo é tão grande que ainda existem muitos mistérios para
            descobrirmos.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;