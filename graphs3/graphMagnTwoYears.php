<?php // content="text/plain; charset=utf-8"
require_once ('../jpgraph/jpgraph.php');
require_once ('../jpgraph/jpgraph_line.php');
include('dataGraphMagnTwoYears.php');
$datay1 = $_SESSION['sendgraphmagnyear1D3'];
$datay2 = $_SESSION['sendgraphmagnyear2D3'];
$datay3 = $_SESSION['sendgraphmagnyear3D3'];

// Setup the graph
$graph = new Graph(900,600);
$graph->SetScale("textlin");
$graph->SetShadow();
$graph->img->SetAntiAliasing(true);
$graph->title->Set('Cumulative rate/year');
$graph->SetBox(false);
$graph->img->SetAntiAliasing();
$graph->yaxis->HideZeroLabel();
$graph->yaxis->HideLine(false);
$graph->yaxis->HideTicks(false,false);
$graph->yaxis->title->Set('Number of earthquakes');
$graph->xgrid->Show();
$graph->xgrid->SetLineStyle("solid");
$graph->xaxis->SetTickLabels( $_SESSION['xmagnyearD3'] );
$graph->xgrid->SetColor('#E3E3E3');
$graph->xaxis->title->Set('Magnitude (R)');
$graph->img->SetMargin(40,110,20,50);
$graph->title->SetFont(FF_FONT1,FS_BOLD);
$graph->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->title->SetFont(FF_FONT1,FS_BOLD);

// Create the first line
$p1 = new LinePlot($datay1);
$graph->Add($p1);
$p1->mark->SetType(MARK_FILLEDCIRCLE,'',1.0);
$p1->mark->SetColor('#55bbdd');
$p1->mark->SetFillColor('#6495ED');
$p1->SetColor("#6495ED");
$p1->SetCenter();
$p1->SetLegend($_SESSION['fromdate1']." - ".$_SESSION['todate1']);

// Create the second line
$p2 = new LinePlot($datay2);
$graph->Add($p2);
$p2->SetColor("#FF1493");
$p2->SetLegend($_SESSION['fromdate2']." - ".$_SESSION['todate2']);
$p2->mark->SetType(MARK_UTRIANGLE,'',1.0);
$p2->mark->SetColor('#FF1493');
$p2->mark->SetFillColor('#FF1493');
$p2->SetCenter();

// Create the third line
$p3 = new LinePlot($datay3);
$graph->Add($p3);
$p3->SetColor("#B22222");
$p3->SetLegend($_SESSION['fromdate3']." - ".$_SESSION['todate3']);
$p3->mark->SetType(MARK_FILLEDCIRCLE,'',1.0);
$p3->mark->SetColor('#B22222');
$p3->mark->SetFillColor('#B22222');
//$p3->value->SetMargin(14);
$p3->SetCenter();

$graph->legend->SetFrameWeight(1);

// Output line
$graph->Stroke();

?>