import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
window.onload = function()
{
	threeDimensional();
};
function threeDimensional()
{
	let colorTableElement = document.querySelector('._color-table');
	// let table = document.querySelectorAll('.g-select__item');
	// console.log(table);
	let colorTable = 0xF5F5F5;
	let containerBlock = document.querySelector('.forest__flex-image-block');
	let imageBlock = document.querySelector('.forest__flex-image-block');
	let	width = containerBlock.offsetWidth;
	let	height = containerBlock.offsetHeight;
	let materialColors;
	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xF5F5F5 );
	const camera = new THREE.PerspectiveCamera( 50, width / height, 0.1, 1000 );
	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5; // отдалим камеру по оси z

	const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
	renderer.setSize(width,height);
	renderer.domElement.setAttribute('id','test');
	renderer.shadowMap.enabled = true;

	const controls = new OrbitControls(camera,renderer.domElement);
	controls.update();
	controls.enableDmping = true;
	controls.minDistance = 40;
	controls.maxDistance = 100;

	imageBlock.insertBefore(renderer.domElement,imageBlock.firstChild);
	const aLight = new THREE.AmbientLight(0xffffff,0.4);
	scene.add(aLight);
	const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set(-10,10,10);
	scene.add(directionalLight);
	const directionalLightL = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLightL.position.set(10,10,-10);
	scene.add(directionalLightL);
	// const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 10 );
	// scene.add( directionalLightHelper );
	const pLight = new THREE.PointLight(0xffffff,0.5);
	// pLight.position.set(10,25,10);
	scene.add(pLight);
	// const pointLightHelper = new THREE.PointLightHelper( pLight, 10 );
	// scene.add( pointLightHelper );
	let loader = new THREE.GLTFLoader();
	var newMaterial = new THREE.MeshPhongMaterial({ color: colorTable, shininess: 200, });
	let obj = null;
	const INITIAL_MAP =
	[
		{childID: "L_8d966dca_8afe_458f_9fc5_cabb543fb8d6_C1_I4", mtl: newMaterial },
		{childID: "L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8", mtl: newMaterial },
		{childID: "Mesh_2", mtl: newMaterial },
	];
	let table = document.querySelectorAll('.g-select__items--table .g-select__item');
	let tableArray = Array.prototype.slice.call(table);
	let tableElement = '/img//model-kvadrat.glb';
	tableArray.forEach((el,index)=>
	{
		el.addEventListener('click',tableView);
	});
	function tableView()
	{
		if(this.getAttribute('data-value') == 'code-rectangular')
			tableElement = '/img//model-kvadrat.glb';
		else if(this.getAttribute('data-value') == 'code-round')
			tableElement = '/img//model-krug.glb';
		else
			tableElement = '/img//model-krug.glb';
		loaderModel(scene,loader,tableElement,obj,INITIAL_MAP);
		return tableElement;
	}
	loaderModel(scene,loader,tableElement,obj,INITIAL_MAP);
	loader.castShadow = true;
	function animate()
	{
		controls.update();
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}
	animate();
}

function loaderModel(scene,loader,tableElement,obj,initialMap)
{
	loader.load(tableElement,function(gltf)
	{
		scene.children.pop();
		let theModel = gltf.scene;
		obj = gltf;
		obj.scene.scale.set(0.3,0.3,0.3);
		for (let object of initialMap)
		{
			initColor(theModel, object.childID, object.mtl);
		}
		function initColor(parent, type, mtl)
		{
			parent.traverse(o =>
			{
				if (o.isMesh)
				{
					if (o.name.includes(type))
					{
						o.scale.set(1,1,1);
						o.material = mtl;
						o.nameID = type; // Set a new property to identify this object
					}
				}
			});
		}

		let tableColor = document.querySelector('._color-table');
		tableColor.addEventListener('input',changeColorTable);
		let tableMaterial = document.querySelectorAll('._forest__flex-content-item-item');
		let tableMaterialArray = Array.prototype.slice.call(tableMaterial);
		tableMaterialArray.forEach((el,index)=>
		{
			el.addEventListener('click',changeMaterialTable);
		});
		function changeColorTable(e)
		{
			let color = this.value.slice(1);
			let new_mtl;
			// console.log(color);
			new_mtl = new THREE.MeshPhongMaterial(
				{
					color: parseInt('0x' + color)
				});
			setMaterial(theModel, 'L_8d966dca_8afe_458f_9fc5_cabb543fb8d6_C1_I4', new_mtl);;
			setMaterial(theModel, 'L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8', new_mtl);;
			setMaterial(theModel, 'Mesh_1', new_mtl);
			setMaterial(theModel, 'Mesh_2', new_mtl);
			// setMaterial(theModel, 'L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8', new_mtl);
		}
		function changeMaterialTable()
		{
			let new_mtl;
			let txt;
			if(this.getAttribute('data-value') == 'code-kargach')
				txt = new THREE.TextureLoader().load('/img//texture.jpeg');
			if(this.getAttribute('data-value') == 'code-oreh')
				txt = new THREE.TextureLoader().load('/img//whiteMaterial.jpeg');
			if(this.getAttribute('data-value') == 'code-graph')
				txt = new THREE.TextureLoader().load('/img//graph.jpeg');
			if(this.getAttribute('data-value') == 'code-shelk')
				txt = new THREE.TextureLoader().load('/img//whiteMaterial.jpeg');
			if(this.getAttribute('data-value') == 'code-akacia')
				txt = new THREE.TextureLoader().load('/img//akaci.jpeg');
			txt.wrapS = THREE.RepeatWrapping;
    		txt.wrapT = THREE.RepeatWrapping;
			txt.repeat.set(1,1);
			new_mtl = new THREE.MeshPhongMaterial( {
				map: txt,
				// shininess: color.shininess ? color.shininess : 10
			});
			setMaterial(theModel, 'L_8d966dca_8afe_458f_9fc5_cabb543fb8d6_C1_I4', new_mtl);;
			setMaterial(theModel, 'Mesh_2', new_mtl);
		}
		function setMaterial(parent, type, mtl)
		{
			parent.traverse((o) =>
			{
				if (o.isMesh && o.nameID != null)
				{
					if (o.nameID == type)
					{
						o.material = mtl;
					}
				}
			});
		}


		let inputVal = $('._min');
		inputVal.each((index,el)=>
		{
			$(el).on('change',function()
			{
				theModel.traverse(o =>
				{
					if (o.isMesh)
					{
						if (o.name.includes('L_8d966dca_8afe_458f_9fc5_cabb543fb8d6_C1_I4'))
						// if (o.name.includes('L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8'))
						{
							o.scale.x = $(inputVal[0]).val() * 0.01;
							o.scale.y = $(inputVal[1]).val() * 0.01;
						}
						if (o.name.includes('Mesh_0'))
						// if (o.name.includes('L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8'))
						{
							o.scale.x = $(inputVal[0]).val() * 0.01;
							o.scale.y = $(inputVal[1]).val() * 0.01;
							// o.scale.z = $(inputVal[1]).val() * 0.01;
						}
						if (o.name.includes('Mesh_1'))
						// if (o.name.includes('L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8'))
						{
							o.scale.x = $(inputVal[0]).val() * 0.01;
							o.scale.y = $(inputVal[1]).val() * 0.01;
							// o.scale.z = $(inputVal[1]).val() * 0.01;
						}
						if (o.name.includes('Mesh_2'))
						// if (o.name.includes('L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8'))
						{
							o.scale.x = $(inputVal[0]).val() * 0.01;
							o.scale.y = $(inputVal[1]).val() * 0.01;
							// o.scale.z = $(inputVal[1]).val() * 0.01;
							// o.scale.y = 0.4
						}
						// if (o.name.includes('L_8d966dca_8afe_458f_9fc5_cabb543fb8d6_C1_I4'))
						if (o.name.includes('L_ea61aa8d_9d6e_4439_aafc_8b4f5b4d2b37_C1_I8'))
						{
							o.scale.x = $(inputVal[0]).val() * 0.01;
							o.scale.y = $(inputVal[1]).val() * 0.01;
						}
					}
				});
			});
		});
		const box = new THREE.Box3().setFromObject( obj.scene );
		const center = box.getCenter( new THREE.Vector3() );
		obj.scene.position.x += ( obj.scene.position.x - center.x );
		obj.scene.position.y += ( obj.scene.position.y - center.y );
		obj.scene.position.z += ( obj.scene.position.z - center.z );
		scene.add(obj.scene);
	});
}
