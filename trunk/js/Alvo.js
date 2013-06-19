function Alvos(file, tam_w, tam_h)
{
	this.img = new Image();
	this.img.src = file;

	this.visivel = true;

	this.tamanho_w = tam_w;
	this.tamanho_h = tam_h;

	this.posicao_x = Math.floor((Math.random()*(800-this.tamanho_w)+50));
	this.posicao_y = Math.floor((Math.random()*(400-this.tamanho_w)+50));
	this.tempo_visto = 100;
	this.tempo_apagado = 100;
	this.pontos = 0;
	this.clicou = false;
	
	this.Update=function()
	{	
		if(tempoSeg > this.tempo_apagado)
		{
			this.visivel = true;
			this.tempo_visto = tempoSeg + Math.floor((Math.random()*100+50));
			this.tempo_apagado = tempoSeg + Math.floor((Math.random()*150+101));
			this.clico = false;
		}
		if (tempoSeg > this.tempo_visto)
		{
			this.visivel = false;
			this.posicao_x = Math.floor((Math.random()*(800-this.tamanho_w))+1);
			this.posicao_y = Math.floor((Math.random()*(400-this.tamanho_h))+1);
		}		
	}
	
	this.Draw=function()
	{
	
		if(this.visivel == true)
		{
			screen.drawImage(this.img, this.posicao_x, this.posicao_y);
		}
	
	}
	
	this.mouse_down = function(mouse)
	{
	
		if(Collide(mouse.x-10, mouse.y-11, 1, 1, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h))	
		{	
			if(this.visivel) 
			{
				this.pontos+=10;
				this.visivel = false;
				this.clico = true;
			}
		}	
	}
	
		
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
				{//abre Collide
					if((x1+w1<x2)//se rect1 esquerda rect2
					||(x1>x2+w2)//se rect1 direita rect2
					||(y1+h1<y2)//se rect1 acima rect2
					||(y1>y2+h2))//se rect1 abaixo rect2
					{//abre if
						return false;//nao colidiu
					}//fecha if
					else
					{//abre else
						return true;//colidiu
					}//fecha else
				}//fecha Collide	
}