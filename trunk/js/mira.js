function Mira(file)
{

	this.img = new Image();
	this.img.src = file;
	this.loaded = false;
	this.visible = true;

	this.img.onload = function()
	{

		loaded = true;
		console.log("carregou" + loaded);

	}

	this.tamanho_w = 80;
	this.tamanho_h = 80;
	this.posicao_x = 400;
	this.posicao_y = 300;
	
	this.update = function()
	{
		console.log("porra")
				
	}

	this.draw = function()
	{
		
		screen.drawImage(this.img, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h)

	}
	
	function mouse_move(mouse)
	{
		
		
		
	} 

}