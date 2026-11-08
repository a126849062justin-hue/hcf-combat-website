"""Build HCF's original low-poly arena with Blender and export a compressed GLB."""
import bpy, math
from pathlib import Path
from mathutils import Vector
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'assets/arena'; OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def xyz(p):return (p[0],-p[2],p[1])
def mat(name,color,metal=0,rough=.5,emit=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 if emit:p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emit
 return m
concrete=mat('Concrete',(0.105,.105,.112),.05,.88);steel=mat('Brushed steel',(.21,.23,.26),.85,.28);black=mat('Carbon black',(.012,.014,.017),.25,.63);leather=mat('Black leather',(.025,.022,.022),.1,.4);red=mat('HCF red',(.63,.006,.012),.2,.38);white=mat('Rope ivory',(.64,.65,.62),.1,.55);glow=mat('Arena rim red',(.8,.004,.009),.3,.2,3);light=mat('Warm fixture',(.8,.83,.9),.1,.25,4)
def cube(name,loc,scale,material,bevel=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=xyz(loc));o=bpy.context.object;o.name=name;o.dimensions=(scale[0],scale[2],scale[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(material)
 if bevel:
  b=o.modifiers.new('Rounded edges','BEVEL');b.width=bevel;b.segments=2;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=b.name)
 return o
def cylinder(name,a,b,r,material,vertices=12):
 va,vb=Vector(xyz(a)),Vector(xyz(b));v=vb-va;bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=r,depth=v.length,location=(va+vb)/2);o=bpy.context.object;o.name=name;o.rotation_euler=v.to_track_quat('Z','Y').to_euler();o.data.materials.append(material);return o
def text(name,body,loc,size,material):
 bpy.ops.object.text_add(location=xyz(loc));o=bpy.context.object;o.name=name;o.data.body=body;o.data.size=size;o.data.align_x='CENTER';o.data.extrude=.014;o.data.bevel_depth=.003;o.rotation_euler=(math.pi/2,0,0);o.data.materials.append(material);bpy.ops.object.convert(target='MESH');return o
cube('Floor',(0,-.16,0),(22,.3,28),concrete)
for x in [-10,10]:cube('Side wall',(x,3,-2),(.3,6,23),concrete)
cube('Back wall',(0,3,-13),(20,6,.3),concrete)
for x in range(-8,10,4):
 cylinder('Roof beam',(x,5.9,-12),(x,5.9,10),.07,steel)
 cylinder('Red light rail',(x,5.75,-11),(x,5.75,-7),.026,glow)
for z in [-10,-2,6]:cylinder('Cross truss',(-10,5.8,z),(10,5.8,z),.08,steel)
# The entry uses two named door leaves so the browser can open them
for x in [-5.3,5.3]:cube('Entry wall',(x,2.7,9),(5.5,5.4,.35),black)
cube('Entry lintel',(0,5.15,9),(5.1,.5,.45),steel)
for side in [-1,1]:
 leaf=cube('DoorLeft' if side==-1 else 'DoorRight',(side*1.25,2.45,9),(2.45,4.9,.18),steel,.04)
 cube('Door light',(side*2.55,2.55,9.25),(.06,5,.04),glow)
text('Entry lettering','ENTER THE ARENA',(0,5.55,9.22),.3,white)
# Real three-dimensional ring and rope geometry
cube('Ring base',(0,.4,-2),(7,.8,7),black,.04)
cube('Ring canvas',(0,.84,-2),(6.8,.08,6.8),mat('Canvas',(.14,.15,.16),0,.95),.03)
for x in [-3.5,3.5]:
 for z in [-5.5,1.5]:
  color=red if x<0 else steel
  cylinder('Corner post',(x,.3,z),(x,3.1,z),.09,steel)
  cube('Corner padding',(x,2.0,z),(.23,1.75,.23),color,.08)
for y in [1.28,1.77,2.26,2.75]:
 for z in [-5.4,1.4]:cylinder('Rope',(-3.4,y,z),(3.4,y,z),.035,red if y in [1.28,2.75] else white)
 for x in [-3.4,3.4]:cylinder('Rope',(x,y,-5.4),(x,y,1.4),.035,red if y in [1.28,2.75] else white)
text('Ring HCF','HCF',(0,.18,1.535),.5,white)
for i in range(3):cube('Entrance step',(0,.12+i*.14,2.8-i*.38),(1.7,.24+i*.28,.6),black,.03)
# Punch bags and bench
for i,z in enumerate([-8,-3,2]):
 cylinder('Bag chain',(-7,3.8,z),(-7,5.8,z),.018,steel)
 cylinder('Punch bag',(-7,1.1,z),(-7,3.9,z),.4,leather,20)
 cylinder('Red bag band',(-7,1.7,z),(-7,1.9,z),.405,red,20)
for z in [-7,-2,3]:
 cube('Bench',(7,.7,z),(1.3,.14,2.7),leather,.05)
 for zz in [-.9,.9]:cube('Bench leg',(7,.32,z+zz),(.8,.64,.1),steel)
# Logo remains the user's original artwork on a metal-backed sign
cube('HCF metal plaque',(0,3.55,-12.72),(3.7,3.7,.12),steel,.06)
logo=mat('Original HCF logo',(1,1,1),.15,.45)
p=logo.node_tree.nodes.get('Principled BSDF');tex=logo.node_tree.nodes.new('ShaderNodeTexImage');tex.image=bpy.data.images.load(str(ROOT/'assets/final-logo.png'));tex.image.pack();logo.node_tree.links.new(tex.outputs['Color'],p.inputs['Base Color']);logo.node_tree.links.new(tex.outputs['Alpha'],p.inputs['Alpha'])
bpy.ops.mesh.primitive_plane_add(size=3.5,location=xyz((0,3.55,-12.63)));o=bpy.context.object;o.name='Original HCF crest';o.rotation_euler=(math.pi/2,0,0);o.data.materials.append(logo)
text('Backwall motto','HONOR   COURAGE   FAITH',(0,1.1,-12.55),.25,white)
# Small trophy shelf represents the arena story rather than a fabricated award
cube('Trophy shelf',(7,1.6,-11),(4,.12,1),steel)
for x,h in [(5.7,.65),(7,.9),(8.3,.55)]:
 cylinder('Trophy stem',(x,1.7,-11),(x,1.9,-11),.07,steel)
 cylinder('Trophy form',(x,1.9,-11),(x,1.9+h,-11),.2,steel,12)
 cube('Trophy base',(x,1.7,-11),(.5,.1,.5),black)
# Export meshes only with bundled Draco decoder served by the site
bpy.ops.export_scene.gltf(filepath=str(OUT/'hcf-arena.glb'),export_format='GLB',export_cameras=False,export_lights=False,export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6)
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'hcf-arena-source.blend'))
# A real model render doubles as the low-motion and WebGL fallback
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1440;scene.render.resolution_y=900;scene.render.resolution_percentage=100
scene.world.color=(.13,.13,.13)
for name,loc,energy,col,size in [('Key',(2,6,4),2600,(.85,.88,1),7),('Rim',(-5,4,-7),1800,(1,.025,.035),5),('Back',(5,4,-10),2200,(.8,.84,1),4)]:
 bpy.ops.object.light_add(type='AREA',location=xyz(loc));l=bpy.context.object;l.name=name;l.data.energy=energy;l.data.color=col;l.data.shape='DISK';l.data.size=size;l.rotation_euler=(Vector(xyz((0,1,-2)))-l.location).to_track_quat('-Z','Y').to_euler()
# Move doors aside for the fallback view
for name,x in [('DoorLeft',-4),('DoorRight',4)]:bpy.data.objects[name].location.x=x
bpy.ops.object.camera_add(location=xyz((8,5,8)));cam=bpy.context.object;cam.rotation_euler=(Vector(xyz((0,1.5,-2)))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=30;scene.camera=cam
scene.render.filepath=str(OUT/'arena-poster.png');bpy.ops.render.render(write_still=True)
print('HCF_ARENA_COMPLETE',OUT)
