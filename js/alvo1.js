function Alvos(file, tamanho_w, tamanho_h)
{//abre 

        this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
		this.posicao_x = Math.floor((Math.random()*(800-tamanho_w)+1));
		this.posicao_y = Math.floor((Math.random()*(600-tamanho_w)+1));
		this.tempo_visto = 100;
		this.tempo_apagado = 100;
		
		this.pontos = 0;
        
        this.posicao_x_dst = this.posicao_x;
        this.posicao_y_dst = this.posicao_y;
        
        this.scale_x = 0.3;
        this.scale_y = 0.3;
        
        this.tamanho_w_src = tamanho_w;
        this.tamanho_h_src = tamanho_h;
        
        this.tamanho_w_dst = 430;
        this.tamanho_h_dst = 101;
        
        this.posicao_x_src = 0;
        this.posicao_y_src = 0;
        
        this.current_frame = 0;
        this.frames = 8;
        
        this.fps = 10;//frames por segundo
        this.time_per_frame = 1000/this.fps;
        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        this.acumulated_delta_time = 0
        this.last_draw_time = 0;
        
        this.Update = function()
        {//abre update
		
		if(tempoSeg > this.tempo_apagado)
		{
			this.visivel = true;
			this.tempo_visto = tempoSeg + Math.floor((Math.random()*100+50));
			this.tempo_apagado = tempoSeg + Math.floor((Math.random()*150+101));
		} 
		if (tempoSeg > this.tempo_visto)
		{
			this.visivel = false;
			this.posicao_x_dst = Math.floor((Math.random()*(800-this.tamanho_w))+1);
			this.posicao_y_dst = Math.floor((Math.random()*(600-this.tamanho_h))+1);
		}		
                
        }//fecha update
        
        this.Draw = function()//funcao desenhar (draw)
        {//abre draw
                
                
                //console.log("oioio");
                
                if(this.visible == true)
                console.log("oioio");
                screen.drawImage(this.img,
                                        this.tamanho_w_src*this.current_frame,
                                        this.posicao_y_src,
                                        this.tamanho_w_src,
                                        this.tamanho_h_src,
                                        this.posicao_x_dst,
                                        this.posicao_y_dst,
                                        this.tamanho_w_dst*this.scale_x,
                                        this.tamanho_h_dst*this.scale_y);
                                        
                this.delta_time = Date.now() - this.last_draw_time;
                
                if(this.acumulated_delta_time > this.time_per_frame)
                {//abre if
                        
                        this.acumulated_delta_time = 0;
                        this.current_frame++;
                        if(this.current_frame >= this.frames)
                        {//abre if
                        
                                this.current_frame = 0;
                                
                        }//fecha if
                        
                }//fecha if
                else
                {//abre else
                
                        this.acumulated_delta_time += this.delta_time;
                        
                }//fecha if
                
                this.last_draw_time = Date.now();
                
        }//fecha draw
		
		this.mouse_down = function(mouse)
		{
	
			if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h))	
			{	
				if(this.visivel) 
				{
					this.pontos+=10;
					this.visivel = false;
				

				}
			}
	
		}
	

        
}//fecha 