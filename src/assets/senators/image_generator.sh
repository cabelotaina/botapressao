#!/bin/bash

wget https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5557.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador285.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador4560.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador4525.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador70.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5905.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador4994.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5525.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5502.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador3830.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5926.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5236.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5979.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador4770.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5585.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5899.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5718.jpg https://www.senado.leg.br/senadores/img/fotos-oficiais/senador677.jpg
convert senador285.jpg -crop 480x480+60+60 output.jpg
find *.jpg -exec convert "{}" -trim -crop 480x480+40+100 "{}" \;

find *.jpg -exec convert "{}" -resize 50x50 "{}" \;

