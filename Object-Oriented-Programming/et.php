<?php
  class Glasses {
    protected $owner = "no one";
    protected $brand = "generic";
    protected $lenscorrection = "";
    protected $material = "unknown";
    public function setOwner ($owner) {
      $this->owner = $owner;
    }
    public function setBrand ($brand) {
      $this->brand = $brand;
    }
    public function setLens ($lens) {
      if ($lens != 'nearsighted') {
        if ($lens != 'farsignted') {
          return "Error: <b>". $lens ."</b> is not a lens type. Please try again.";
        }
      }
      $this->lenscorrection = $lens;
    }
    public function setMaterial ($material) {
      $this->material = $material;
    }
    public function describe() {
      return "Owner: " . $this->owner . "<br>Brand: " . $this->brand . "<br>Lens Correction: " . $this->lenscorrection . "<br>Material: " . $this->material; 
    }
    public function correct($image) {
      return $image . " but less blurry for a " . $this->lenscorrection . " user";
    }
  }
  class Sunglasses extends Glasses {
    protected $shade;
    public function setShade ($shade) {
      $this->shade = $shade;
    }
    public function describe () {
      return parent::describe() . "<br>Tint: " . $this->shade;
    }
    public function correct($image) {
      return $image . " but " . $this->shade . " and less blurry for a " . $this->lenscorrection . " user.";
    }
  }
?>