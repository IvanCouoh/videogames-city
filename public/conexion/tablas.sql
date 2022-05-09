CREATE TABLE tblgames (
  id int(11) NOT NULL,
  title varchar(200) NOT NULL,
  description text NOT NULL,
  recommets int(11) NOT NULL,
  image varchar(5000) NOT NULL,
  status int(11) NOT NULL
) 

ALTER TABLE `tblgames`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tblgames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `tblgames` (`id`, `title`, `description`, `recommets`, `image`, `status`) VALUES
(1, 'Metro 2033', 'Metro 2033 es un videojuego de terror de supervivencia de disparos en primera persona desarrollado por 4A Games y publicado por THQ . Fue lanzado en 2010 para Xbox 360 y Microsoft Windows . La historia está basada enla novela homónima de Dmitry Glukhovsky y se desarrolla en las ruinas de Moscú tras una guerra nuclear , donde los supervivientes se ven obligados a vivir entúnelessubterráneos del metro', 3, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Metro_2033_Game_Cover.jpg/220px-Metro_2033_Game_Cover.jpg', 1),
(2, 'Outlast', 'Outlast es un videojuego de horror de supervivencia en primera persona desarrollado y publicado por Red Barrels Inc, una compañía fundada por antiguos miembros del equipo de desarrolladores de otros juegos como Prince of Persia, Assassin\s Creed, Splinter Cell y Uncharted', 3, 'https://cdn2.unrealengine.com/egs-theoutlasttrials-redbarrels-s2-1200x1600-173912166.jpg', 1),
(3, 'Left 4 dead', 'Left 4 Dead (abreviado como L4D) es un videojuego cooperativo multijugador de disparos en primera persona de acción y terror. ... Situada posteriormente a una pandemia apocalíptica, la trama del videojuego enfrenta a cuatro Supervivientes, Bill, Francis, Louis y Zoey, contra hordas de Infectados.', 4, 'https://i.blogs.es/3a0814/l4dead2/450_1000.jpg', 1),
(4, 'S.T.A.L.K.E.R', 'es una serie de videojuegos de terror y supervivencia de disparos en primera persona desarrollados por el desarrollador devideojuegos ucraniano GSC Game World para Microsoft Windows . Los juegos se desarrollan en el área que rodea elsitio del desastre de Chernobyl , conocido coloquialmente como la Zona , en una realidad alternativa donde ocurre una segunda explosión en elLa central nuclear de Chernobyl veinte años después de la primera y provoca extraños cambios en la zona que la rodea.', 2, 'https://upload.wikimedia.org/wikipedia/en/b/b3/Shadow_of_Chernobyl_cover.jpg', 1),
(6, 'Need for speed', 'La serie se centra en las carreras callejeras ilícitas y, en general, les da el papel a los jugadores de completar varios tipos de carreras, infringiendo en más de una ocasión la ley local en persecuciones policiales. La serie lanzó su primer título, The Need for Speed en 1994.', 0, 'https://cdn.cloudflare.steamstatic.com/steam/apps/1262600/capsule_616x353.jpg?t=1598622229', 0);
