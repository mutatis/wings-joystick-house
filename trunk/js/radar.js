function Radar(file, tamanho_w, tamanho_h, posicao_x, posicao_y)
{//abre 

        this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
		//this.pontos = pontos;
        
        this.posicao_x_dst = posicao_x;
        this.posicao_y_dst = posicao_y;
        
        this.scale_x = 0.5;
        this.scale_y = 0.5;
        
        this.tamanho_w_src = tamanho_w;
        this.tamanho_h_src = tamanho_h;
        
        this.tamanho_w_dst = 307;
        this.tamanho_h_dst = 312;
        
        this.posicao_x_src = 0;
        this.posicao_y_src = 0;
        
        this.current_frame = 0;
        this.frames = 29;
        
        this.fps = 29;//frames por segundo
        this.time_per_frame = 1000/this.fps;
        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        this.acumulated_delta_time = 0
        this.last_draw_time = 0;
        
        this.update = function()
        {//abre update
                
        }//fecha update
        
        this.draw = function()//funcao desenhar (draw)
        {//abre draw
                
                if(this.visible)
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
        
}//fecha 